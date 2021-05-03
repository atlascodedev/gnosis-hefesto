import { SeverityLevel } from "@hefesto/types";
import chalk from "chalk";
import logSymbols from "log-symbols";

const enhancedLog = (
  message: string,
  label: string,
  severity: SeverityLevel
) => {
  let backgroundColor: string = "";
  const color: string = "#FFFFFF";
  let symbol: string = "";

  switch (severity) {
    case "success":
      backgroundColor = "#4caf50";
      symbol = logSymbols.success;
      break;

    case "error":
      backgroundColor = "#f44336";
      symbol = logSymbols.error;
      break;

    case "info":
      backgroundColor = "#2196f3";
      symbol = logSymbols.info;
      break;

    case "warning":
      backgroundColor = "#ff9800";
      symbol = logSymbols.warning;
  }

  console.log(
    `${symbol} ${chalk.bgHex(backgroundColor).hex(color)(label)}: ${message}`
  );
};
