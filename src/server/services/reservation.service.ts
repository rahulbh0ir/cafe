import { reservationRepository, Data } from "../repositories/reservation.repository";


export const reservationService =  {
  
  async createReservation(input : Data) {
    const { name, phone, email, date, time } = input

    // 1st condition 
    if( !name || !phone || !email || !date || !time ) {
      throw new Error("Missing required fields")
    }

    const existingReservation = await reservationRepository.findByDateandTime(date, time);
    
    // 2nd condition
    if(existingReservation.length >= 10) {
      throw new Error("Time slot is fully booked")
    }

    
    return reservationRepository.create({
      name,
      phone,
      email,
      date,
      time,
    });

  },


  async getAllReservations() {
    const list = await reservationRepository.reservations()
    return list
  } 


  

};  