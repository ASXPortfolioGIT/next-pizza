import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

// GET /api/users — получить всех пользователей
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST /api/users — создать нового пользователя
export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data, // убедись, что data соответствует модели (например: { email: "test@example.com", name: "John" })
  });

  return NextResponse.json(user, { status: 201 });
}
