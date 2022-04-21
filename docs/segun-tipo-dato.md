
# Nombre según el tipo de dato
## Arreglos - Arrays

```ts
// malo
const fruit = ['manzana', 'platano', 'fresa'];
```

```ts
// regular
const fruitList = ['manzana', 'platano', 'fresa'];
```

```ts
// bueno
const fruits = ['manzana', 'platano', 'fresa'];
```

```ts
// mejor
const fruits = ['manzana', 'platano', 'fresa'];
```

## Booleanos - Booleans

```ts
// malo
const open = true;
const write = true;
const fruit = true;
const active = true;
const noValues = true;
const notEmpty = true;
```
```ts
// mejor
const isOpen = true;
const canWrite = true;
const hasFruit = false;
const isActive = true;
const hasValues = true;
const isEmpty = false;
```

## Números - Numbers
```ts
// malo
const fruits = 3;
const cars = 10;
```

```ts
// mejor
const maxFruits = 3;
const minFruits = 10;
const totalFruits = 10;

const totalOfCars = 5;
```

## Funciones
```ts
// malo
createUserIfNotExists();
updateUserIfNotExists();
sendEmailIfFieldsValid();
```
```ts
// mejor
createUser();
updateUser();
sendEmail();
```