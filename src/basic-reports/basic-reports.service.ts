import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import {
  getCountryReport,
  getEmploymentLetterByIdReport,
  getEmploymentLetterReport,
  getHelloWorldReport,
} from 'src/reports';
@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    //console.log('Connected to the database');
  }

  constructor(private readonly printerService: PrinterService) {
    super(); // Initialize the PrismaClient
  }

  hello() {
    const docDefinition = getHelloWorldReport({ name: 'Fareh Romero' });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetterReport();

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async employmentLetterById(id: number) {
    const employee = await this.getEmployee(id);

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    const docDefinition = getEmploymentLetterByIdReport({
      employerName: 'Fareh Romero',
      employerPosition: 'Software Developer',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employeeCompany: 'Romero Software S.L.',
    });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async getEmployee(id: number) {
    try {
      return await this.employees.findUnique({
        where: {
          id: id,
        },
      });
    } catch {
      return null;
    }
  }

  async getCountries() {
    const docDefinition = getCountryReport();

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }
}
