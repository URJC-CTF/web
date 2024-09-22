const AULA_CLASE: string = 'Laboratorios III: 111';
const AULA_CTF: string = 'Laboratorios III: 111';

export default {
	is_published: true,
	year: 2024,
	startTime: '17:00',
	endTime: '19:00',
	months: [
		{
			name: 'Septiembre',
			days: [
				{
					date: 20,
					module: 'Introducción a los CTFs y Módulo I: OSINT y Estego',
					location: AULA_CLASE
				},
				{
					date: 27,
					module: 'Modulo II: Forense',
					location: AULA_CLASE
				}
			]
		},
		{
			name: 'Octubre',
			days: [
				{
					date: 4,
					module: 'Modulo III: Criptografía',
					location: AULA_CLASE
				},
				{
					date: 11,
					module: 'Primer CTF',
					location: AULA_CTF
				},
				{
					date: 18,
					module: 'Módulo III: Criptografía',
					location: AULA_CLASE
				},
				{
					date: 25,
					module: 'Módulo IV: Web',
					location: AULA_CLASE
				}
			]
		},
		{
			name: 'Noviembre',
			days: [
				{
					date: 4,
					module: 'Módulo IV: Web',
					location: AULA_CLASE
				},
				{
					date: 8,
					module: 'Segundo CTF',
					location: AULA_CTF
				},
				{
					date: 15,
					module: 'Módulo V: Blockchain',
					location: AULA_CLASE
				},
				{
					date: 22,
					module: 'Módulo VI: Reversing y Binary Exploitation',
					location: AULA_CLASE
				},
				{
					date: 28,
					module: 'Módulo VI: Reversing y Binary Exploitation',
					location: AULA_CLASE
				}
			]
		},
		{
			name: 'Diciembre',
			days: [
				{
					date: 13,
					module: 'CTF Final por equipos',
					location: AULA_CTF
				}
			]
		}
	]
}
