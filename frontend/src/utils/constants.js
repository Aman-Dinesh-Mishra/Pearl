export const GEMINI_API_KEY = "AIzaSyDnTdOBnHHpIgsucu_ub8krj4OwBuLHsks";

export const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// 🔸 Add more languages to dropdown
export const languageOptions = [
  { name: "JavaScript", value: "javascript" },
  { name: "Python", value: "python" },
  { name: "C++", value: "cpp" },
  { name: "C", value: "c" },
  { name: "Java", value: "java" },
  { name: "R", value: "r" },
];

// 🔸 Add boilerplate templates for each
export const languageBoilerplates = {
  javascript: `function greet() {
  console.log("Hello, world!");
}
greet();`,

  python: `def greet():
  print("Hello, world!")

greet()`,

  cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello, world!" << endl;
  return 0;
}`,

  c: `#include <stdio.h>

int main() {
  printf("Hello, world!\\n");
  return 0;
}`,

  java: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}`,

  r: `greet <- function() {
  print("Hello, world!")
}
greet()`,
};
