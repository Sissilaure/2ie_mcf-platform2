import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({ where: { email: 'admin@2ie-edu.org' } });
  if (!existing) {
    await prisma.user.create({
      data: {
        name: 'Admin 2iE',
        email: 'admin@2ie-edu.org',
        password: await bcrypt.hash('Password123!', 10),
        role: 'ADMIN',
        filiere: 'Centrale-2iE',
        promo: 'M2',
      },
    });
  }

  await prisma.annonce.createMany({
    data: [
      {
        titre: 'Bienvenue sur 2iE Connect',
        contenu: 'La plateforme est ouverte aux boursiers MCF.',
        auteurId: (await prisma.user.findUnique({ where: { email: 'admin@2ie-edu.org' } }))!.id,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
