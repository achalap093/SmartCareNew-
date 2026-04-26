# SmartCare - Module Task Breakdown

## Module 1: Patient Management
**Assigned To:** @achalap093

### Backend Tasks
- [ ] Update `user.model.js` - Add patient-specific fields (emergency contact, blood type, allergies)
- [ ] Create `patient.controller.js` - Patient CRUD operations
- [ ] Create `patient.service.js` - Patient business logic
- [ ] Create `patient.routes.js` - API endpoints
- [ ] Create `patient.validation.js` - Input validation
- [ ] Implement patient registration endpoint
- [ ] Implement patient profile management
- [ ] Implement medical history tracking

### Frontend Tasks
- [ ] Create patient registration form
- [ ] Create patient dashboard
- [ ] Create patient profile page
- [ ] Create medical history view
- [ ] Create appointment booking interface

---

## Module 2: Doctor & Staff Management
**Assigned To:** @Maneka-Dev

### Backend Tasks
- [ ] Update `user.model.js` - Add doctor-specific fields (specialty, qualifications, experience)
- [ ] Create `doctor.controller.js` - Doctor CRUD operations
- [ ] Create `doctor.service.js` - Doctor business logic
- [ ] Create `doctor.routes.js` - API endpoints
- [ ] Create `doctor.validation.js` - Input validation
- [ ] Implement doctor profile management
- [ ] Implement staff scheduling logic
- [ ] Implement department assignments
- [ ] Update `doctorAvailability.model.js` - Add availability fields

### Frontend Tasks
- [ ] Create doctor profile page
- [ ] Create staff admin panel
- [ ] Create doctor availability scheduler
- [ ] Create department management view

---

## Module 3: Appointment & Scheduling
**Assigned To:** @Kaushi@54321

### Backend Tasks
- [ ] Review `appointment.model.js` - Add missing fields
- [ ] Update `appointment.controller.js` - Add booking logic
- [ ] Update `appointment.service.js` - Add scheduling logic
- [ ] Update `appointment.routes.js` - Add new endpoints
- [ ] Update `appointment.validation.js` - Add validation
- [ ] Implement book appointment endpoint
- [ ] Implement cancel/reschedule endpoint
- [ ] Implement doctor timetable management
- [ ] Implement queue management

### Frontend Tasks
- [ ] Create appointment booking UI
- [ ] Create appointment list view
- [ ] Create cancel/reschedule interface
- [ ] Create doctor timetable view
- [ ] Create appointment confirmation

---

## Module 4: Billing & Payment
**Assigned To:** @rashmika19993

### Backend Tasks
- [ ] Review `bill.model.js` - Add missing fields
- [ ] Review `payment.model.js` - Add Stripe integration
- [ ] Create `bill.controller.js` - Bill operations
- [ ] Create `bill.service.js` - Bill business logic
- [ ] Create `bill.routes.js` - API endpoints
- [ ] Create `payment.controller.js` - Payment operations
- [ ] Create `payment.service.js` - Payment logic
- [ ] Implement generate bill endpoint
- [ ] Implement payment processing (Stripe)
- [ ] Implement invoice generation

### Frontend Tasks
- [ ] Create billing dashboard
- [ ] Create payment checkout (Stripe)
- [ ] Create invoice view
- [ ] Create payment history
- [ ] Create insurance claim interface

---

## Module 5: Pharmacy & Medical Records
**Assigned To:** @Heshyy@15022024

### Backend Tasks
- [ ] Review `medicalRecord.model.js` - Add EMR fields
- [ ] Create `medicalRecord.controller.js` - Record operations
- [ ] Create `medicalRecord.service.js` - Record logic
- [ ] Review `medicine.model.js` - Add inventory fields
- [ ] Create `medicine.controller.js` - Medicine operations
- [ ] Create `medicine.service.js` - Medicine logic
- [ ] Review `lab.model.js` - Add lab report fields
- [ ] Implement prescription management
- [ ] Implement medicine inventory tracking
- [ ] Implement EMR system

### Frontend Tasks
- [ ] Create medical record view
- [ ] Create prescription form
- [ ] Create medicine inventory view
- [ ] Create lab report view
- [ ] Create pharmacy dashboard

---

## Priority Order

1. **Phase 1** - Foundation (All members)
   - User authentication
   - Role-based access control
   - Basic database models

2. **Phase 2** - Core Features
   - Patient Management
   - Doctor & Staff Management
   - Appointment & Scheduling

3. **Phase 3** - Financial & Medical
   - Billing & Payment
   - Pharmacy & Medical Records

---

## Notes

- Each module should have its own feature branch
- Create PRs for code review before merging to main
- Test all endpoints before submitting PR
- Update this document as tasks are completed