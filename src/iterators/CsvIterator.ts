import { readFileSync } from "fs";
import { UserData } from "../data/UserData";

export class CsvIterator implements Iterable<UserData> {
  private users: UserData[];

  constructor(filePath: string) {
    const content = readFileSync(filePath, "utf-8");
    const [header, ...lines] = content.split("\n").filter((l) => l.trim());
    this.users = lines.map((line) => {
      const [id, name, email, phone] = line.split(",");
      return { id: +id, name, email, phone };
    });
  }

  *[Symbol.iterator](): Iterator<UserData> {
    for (const u of this.users) {
      yield u;
    }
  }
}
