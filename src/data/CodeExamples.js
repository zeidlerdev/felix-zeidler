export const codeExamples = {
  "Frontend.html": `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
     content="width=device-width,
     initial-scale=1.0">
    <title>Your Website!</title>
</head>
<body>
    <h1>Hello, Frontend!</h1>
    <p>Design me with CSS and JavaScript!
</body>
</html>`,

  "Backend.js": `const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Backend!\\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`Server running 
    at http://localhost:\${PORT}/\`);
});`,

  "DataBase.sql": `CREATE TABLE Users (
    ID int NOT NULL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Email varchar(255) NOT NULL UNIQUE
);
INSERT INTO Users (ID, Name, Email) VALUES (1, 'John Doe'
`,
};

export const floatingCards = {
  "Frontend.html": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "FE",
    title: "Frontend Development",
    content:
      "Building responsive and interactive user interfaces using HTML, CSS, JavaScript and React.",
  },
  "Backend.js": {
    bgColor: "bg-green-500/20",
    iconcolor: "text-green-400",
    textColor: "text-green-200",
    contentColor: "text-green-300",
    icon: "BE",
    title: "Backend Development",
    content:
      "Creating robust server-side applications and APIs using Node.js and Python.",
  },
  "DataBase.sql": {
    bgColor: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    textColor: "text-yellow-200",
    contentColor: "text-yellow-300",
    icon: "SQL",
    title: "Database creation and Management",
    content:
      "Designing and managing relational databases using SQL and MYSQL technologies.",
  },
};
