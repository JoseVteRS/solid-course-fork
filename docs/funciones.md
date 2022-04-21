# Funciones
*"Sabemos que estamos desarrollando código limipio cuando cada función hace exactamente lo que su nombre indica"* - **Ward Cunningham**


```ts
// malo
function sendEmail(): boolean {

    // Verificar correo

    // Revisar contraseña

    // Crear usuario en BBDD

    // Si todo sale bien
    return true;
}
```

```ts
// mejor 
function sendEmail(toWhom: string): boolean {

    // Verificar correo
    if( !toWhom.includes('@')) return false;

    // Consultar el cuerpo o mensaje

    // Enviar correo

    // Si todo sale bien
    return true;
}
```

## Parámetros y argumentos

Limitar a 3 parámetros posicionales

```ts
// No muy bien
function sendEmail(
    toWhom: string,
    from: string,
    body: string,
    subject: string,
    apiKey: string,
): boolean {

}
```

```ts
// Mejor

interface SendEmailOptions {
    toWhom: string;
    from: string;
    body: string;
    subject: string;
    apiKey: string;
}

function sendEmail({ toWhom, from, body, subject, apiKey }: SendEmailOptions): boolean { }
```
---

## Otras recomendaciones

- Simplicidad es fundamental.
- Funciones de tamaño reducido.
- Funciones de una sola línea sin causar complejidad.
- Menos de 20 líneas.
- Evita el use del "else".
- Prioriza el uso de la condicional ternario hasta donde sea posible.