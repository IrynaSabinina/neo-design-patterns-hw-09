import { readFileSync } from "fs";
import { UserData } from "../data/UserData";

export class XmlIterator implements Iterable<UserData> {
  private users: UserData[];

  constructor(filePath: string) {
    const content = readFileSync(filePath, "utf-8");
    this.users = [
      ...content.matchAll(
        /<user>[\s\S]*?<id>(.*?)<\/id>[\s\S]*?<name>(.*?)<\/name>[\s\S]*?<email>(.*?)<\/email>[\s\S]*?<phone>(.*?)<\/phone>[\s\S]*?<\/user>/g
      ),
    ].map((m) => ({
      id: +m[1],
      name: m[2],
      email: m[3],
      phone: m[4],
    }));
  }

  *[Symbol.iterator](): Iterator<UserData> {
    for (const u of this.users) {
      yield u;
    }
  }
}
