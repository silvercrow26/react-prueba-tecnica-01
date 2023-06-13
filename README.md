# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

Pasos: 

**1.- Create react project**
```
    npm create vite@lastest -> Vanilla(No react template) 
```
**2.- Install react plugin & dependencies()**
```
    npm install @vitejs/plugin-react -E
    npm install react react-dom -E
```
**3.- Install ESLint**
```
    npm install standard -D
```

**4.- Configure ESLint**
```    
    package.json > add   "eslintConfig": {"extends":"./node_modules/standard/eslintrc.json"}
```

**5.- Configure testing**
```
    npm init playwright
```