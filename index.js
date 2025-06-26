console.log("Hello Boolean");
import chalk from "chalk";
import axios from "axios";
console.log(chalk.bgGreen("Chalk installato"));

console.log(process.env.My_Secret_Key);
console.log(process.argv[2]);
axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => {
    console.log(response.data);
  });
