#!/usr/bin/python

"""
Conversiones y cifrados en Python
Curso de CTF competitivo
Módulo I: introducción y criptografía
"""
__name__ = "Conversiones y cifrados en Python"
__author__ = "Javier Sánchez García-Ochoa"
__date__ = 8 / 10 / 2021


import base64
from binascii import hexlify, unhexlify
from Crypto.Cipher import AES # Instalar paquete 'pycrypto'
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP


message = "Hello world" # Tenemos nuestra cadena
print("MENSAJE ORIGINAL:", message)


################# Binario #################
message_bytes = message.encode('ascii') # Lo convertimos en binario, nos será útil en muchos casos
print("Mensaje en bytes:", message_bytes)


################# ASCII #################
print("Mensaje en ASCII:", end=' ')

[print(ord(letter), end=' ') for letter in message] # Imprimir en ASCII opción 1
for letter in message: # Imprimir en ASCII opción 2
    print(ord(letter), end=' ')

print() # Línea en blanco
print() # Línea en blanco



################# Base64 #################
# Convertir A Base64
bytes_b64 = base64.b64encode(message_bytes) # Codificamos la cadena en base64
print("Mensaje en bytes en base64:", bytes_b64)
message_b64 = bytes_b64.decode('ascii') # Decodificamos el base64 en bytes
print("Mensaje en ASCII en base64:", message_b64)

# Revertir Base64
decode_b64 = base64.b64decode(bytes_b64)
message_decoded_b64 = decode_b64.decode('ascii')
print("Mensaje revertido de base64:", message_decoded_b64)

print() # Línea en blanco



################# Base32 #################
# Convertir A Base32
bytes_b32 = base64.b32encode(message_bytes) # Codificamos la cadena en base64
print("Mensaje en bytes en base32:", bytes_b32)
message_b32 = bytes_b32.decode('ascii') # Decodificamos el base64 en bytes
print("Mensaje en ASCII en base32:", message_b32)

# Revertir BASE32
decode_b32 = base64.b32decode(bytes_b32)
message_decoded_b32 = decode_b32.decode('ascii')
print("Mensaje revertido de base32:", message_decoded_b32)

print() # Línea en blanco



################# HEXADECIMAL #################
# Convertir a Hexadecimal (2 opciones)
message_hex1 = message_bytes.hex() # Opción 1
message_hex2 = hexlify(message_bytes) # Opción 2 (libreria binascii.hexlify)
print("Mensaje 1 en HEX: ", message_hex1)
print("Mensaje 2 en HEX: ", message_hex2)

# Revertir Hexadecimal (2 opciones)
bytes_decoded_hex1 = bytes.fromhex(message_hex1) # Opción 1
bytes_decoded_hex2 = unhexlify(message_hex2) # Opción 2 (libreria binascii.unhexlify)
message_decoded_hex1 = bytes_decoded_hex1.decode('ascii')
message_decoded_hex2 = bytes_decoded_hex2.decode('ascii')
print("Mensaje 1 revertido de HEX: ", message_decoded_hex1)
print("Mensaje 2 revertido de HEX: ", message_decoded_hex2)

print() # Línea en blanco



################# XOR #################
# Función auxiliar para cifrar textos (Python tiene operador ^ pero para nivel de bit, esta es para textos)
def str_xor(s1, s2):
    return "".join([chr(ord(c1) ^ ord(c2)) for (c1,c2) in zip(s1,s2)])

# Cifrar XOR
clave_xor = "Clave"
xor = str_xor(message, clave_xor)
print("Mensaje XOR:", xor.encode('ascii')) # Cambio a binario para ver los caracteres ya que algunos no se representan

# Descifrar XOR
decoded_xor = str_xor(xor, clave_xor) # Revertimos usando propiedades del XOR: (A XOR B) XOR B = A
print("Mensaje XOR decodificado:", decoded_xor)

print() # Línea en blanco



################# AES-CBC #################
# Datos nuevos por requisitos de AES-CBC, para evitar problemas con longitudes de datos

iv = "EsteEsMiMensaje!".encode("ascii") # Longitud 16 caracteres, si no hay que rellenar con padding
clave = "EstaEsMiClavePrivadaSuuperSegura".encode("ascii") # Longitud 32 caracteres, si no hay que rellenar con padding
texto = "MisTextosSonMuyImportantesAmigoo".encode("ascii") # Longitud 32 caracteres, si no hay que rellenar con padding

# Cifrar AES-CBC
cipher = AES.new(clave, AES.MODE_CBC, iv)
cifrado_aes = cipher.encrypt(texto)
print("Texto cifrado con AES-CBC:", cifrado_aes)

# Descifrar AES-CBC
decipher = AES.new(clave, AES.MODE_CBC, iv)
descifrado_aes = decipher.decrypt(cifrado_aes)
print("Texto descifrado de AES-CBC:", descifrado_aes)

print() # Línea en blanco


################# RSA #################
# Generación de claves
par_claves = RSA.generate(3072)

par_publico = par_claves.publickey()
print(f"Clave Pública RSA:\n  n={hex(par_claves.n)},\n  e={hex(par_claves.e)}")
print() # Línea en blanco
clave_publica = par_publico.exportKey()
print(clave_publica.decode('ascii'))
print() # Línea en blanco

print(f"Clave Privada RSA:\n  p={hex(par_claves.p)},\n  q={hex(par_claves.q)},\n  d={hex(par_claves.d)}")
print() # Línea en blanco
clave_privada = par_claves.exportKey()
print(clave_privada.decode('ascii'))
print() # Línea en blanco

# Cifrar RSA
mensaje_rsa = 'Este es el mensaje que vamos a cifrar'.encode("ascii")
encryptor = PKCS1_OAEP.new(par_publico)
cifrado_rsa = encryptor.encrypt(mensaje_rsa)
print("Texto cifrado con RSA:", cifrado_rsa)
print() # Línea en blanco

# Descifrar RSA
decryptor = PKCS1_OAEP.new(par_claves)
descifrado_rsa = decryptor.decrypt(cifrado_rsa)
print("Texto descifrado de RSA:", descifrado_rsa)
