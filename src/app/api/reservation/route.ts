import { NextResponse } from "next/server";
import { reservationService } from "@/server/services/reservation.service";


export async function GET() {
  return NextResponse.json(
    { success: true, value: "This is Get Request" },
    { status: 200 }
  )
}


export async function POST(request: Request) {

  try {

    const body = await request.json();
    const reservation = await reservationService.createReservation(body);

    return NextResponse.json(
      { success: true, reservation },
      { status: 201 }
    );

  } catch (error: any) {

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )


  }
}


export async function DELETE(request: Request) {

  try {

    const body = await request.json();
    const deletedId = await reservationService.deleteReservation(body);

    return NextResponse.json(
      { success: true, deletedId },
      { status: 200 }
    );

  } catch (error: any) {

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    )

  }


}
