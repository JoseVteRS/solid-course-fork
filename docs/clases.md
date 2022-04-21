# Clases

- El nombre es lo más importante de la clase.
- Formados por un sustantivo o frase de sustantivo.
- No deben de ser muy genericos.
- Usar el PascalCamelCase

3 preguntas para determinar si es un buen nombre 
- ¿Qué exactamente hace la clase?
- ¿Cómo exactamente esta clase realiza cierta tarea?
- ¿Hay algo específico sobre su ubicación?

---

**Más palabra !== mejor nombre**

```ts
// malos - son nombre muy genéricos
class SpecialViewCaseMonsterManagerEventsHadlerActivitySingleton{}
```

```ts
// malos - son nombre muy genéricos
class Manager{}
class Data{}
class Info{}
class Individual{}
class Processor{}
class SpecialMonsterView{}
```
```ts
// malos
class Manager{}
class Data{}
class Info{}
class Individual{}
class Processor{}
class SpecialMonsterView{}
```
