import { NextResponse } from "next/server";
import { reservationService } from "@/server/services/reservation.service";


export async function GET() {

  try {
    const data = await reservationService.getAllReservations()
    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  }
  catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch reservations" },
      { status: 500 }
    )
  }

}
