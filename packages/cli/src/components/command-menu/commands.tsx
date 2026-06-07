import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new",
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (ctx) => { ctx.exit(); },
  },
  {
    name: "usage",
    description: "Open billing poertal in your browser",
    value: "/usage",
  },
  {
    name: "upgrade",
    description: "Buy more credits",
    value: "/upgrade"
  },
  {
    name: "logout",
    description: "Sign out of your account",
    value: "/logout"
  },
  {
    name: "login",
    description: "sign in with your browser",
    value: "/login",
  },
  {
    name: "theme",
    description: "Change color theme",
    value: "/theme",
  },
  {
    name: "sessions",
    description: "Browse past sessions",
    value: "/sessions",
  },
  {
    name: "models",
    description: "Select AI model for generation",
    value: "/models",
  },
  {
    name: "agents",
    description: "Switch agents",
    value: "/agents"
  }
];
