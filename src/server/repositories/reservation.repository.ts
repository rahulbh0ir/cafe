import { prisma } from "../db";

export interface Data {
  name : string
  phone : string
  email : string
  date : string
  time : string
}


export const reservationRepository = {

  create(data : Data) {
    return prisma.reservation.create({
      data,
    });
  },

  delete(id : string) {
    return prisma.reservation.delete({
      where: { id }
    });
  },

  findByDateandTime(date: string, time: string) {
    return prisma.reservation.findMany({
      where: { date, time },
    });
  },
  
  findByPhone(phone : string) {
    return prisma.reservation.findFirst({
      where: { phone },
    });
  },

  reservations() {
    return prisma.reservation.findMany({
      orderBy : {
        createdAt : "desc"
      }
    })
  },


}