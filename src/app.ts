const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createCurso = async () => {
    try {
        const TipoCurso = await prisma.Tipo_curso.create({
            data: {
                NOMBRE_TIPO_CURSO: 'Programacion',
            },
        });
        console.log('Tipo de curso creado:', TipoCurso);

        const Profesor = await prisma.Profesor.create({
            data: {
                NOMBRE_PROFESOR: 'John',
                APELLIDO_PROFESOR: 'Cevallos',
                CEDULA_PROFESOR: '1234567890',
                CELULAR_PROFESOR: '0987654321',
                CORREO_PROFESOR: 'johncevallos@mail.com',
            },
        });
        console.log('Profesor creado:', Profesor);

        const NivelCurso = await prisma.Nivel_curso.create({
            data: {
                NIVEL_CURSO: 4,
            },
        });
        console.log('Nivel de curso creado:', NivelCurso);
        const Curso = await prisma.Curso.create({
            data: {
                NOMBRE_CURSO: 'App web',
                TIPO: TipoCurso.ID_TIPO_CURSO,
                PROFESOR: Profesor.ID_PROFESOR,
                NIVEL: NivelCurso.ID_NIVEL_CURSO,
            },
        });
        console.log('Curso creado:', Curso);
    } catch (error) {
        console.error('Error al crear registros:', error);
    } finally {
        await prisma.$disconnect();
    }
};

createCurso();
