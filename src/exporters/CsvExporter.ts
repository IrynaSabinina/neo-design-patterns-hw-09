import { promises as fs, mkdirSync } from "fs";
import { DataExporter } from "./DataExporter";
import { UserData } from "../data/UserData";

export class CsvExporter extends DataExporter {
  protected render(): void {
    const header = "id,name,email,phone";
    const rows = this.data.map(
      (u: UserData) => `${u.id},${u.name},${u.email},${u.phone}`
    );
    this.result = [header, ...rows].join("\n");
  }

  protected async save(): Promise<void> {
    mkdirSync("./dist", { recursive: true });
    await fs.writeFile("./dist/users.csv", this.result, "utf-8");
  }
}
