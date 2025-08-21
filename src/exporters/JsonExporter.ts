import { promises as fs } from "fs";
import { DataExporter } from "./DataExporter";

export class JsonExporter extends DataExporter {
  protected render(): void {
    this.result = JSON.stringify(this.data, null, 2);
  }

  protected async save(): Promise<void> {
    await fs.writeFile("./dist/users.json", this.result, "utf-8");
  }
}
