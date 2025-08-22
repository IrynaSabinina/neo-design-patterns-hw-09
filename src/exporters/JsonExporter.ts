import { promises as fs, mkdirSync } from "fs";
import { DataExporter } from "./DataExporter";

export class JsonExporter extends DataExporter {
  protected render(): void {
    this.result = JSON.stringify(this.data, null, 2);
  }

  protected async save(): Promise<void> {
    mkdirSync("./dist", { recursive: true });
    await fs.writeFile("./dist/users.json", this.result, "utf-8");
  }
}
