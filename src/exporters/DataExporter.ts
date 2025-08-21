import { promises as fs } from "fs";
import { UserData } from "../data/UserData";

export abstract class DataExporter {
  protected data: any[] = [];
  protected result: string = "";

  public async export(): Promise<void> {
    await this.load();
    this.transform();
    this.beforeRender();
    this.render();
    this.afterRender();
    await this.save();
  }

  protected async load(): Promise<void> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    this.data = await res.json();
  }

  protected transform(): void {
    this.data = this.data
      .map((u: any) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        phone: u.phone,
      }))
      .sort((a: UserData, b: UserData) => a.name.localeCompare(b.name));
  }

  protected beforeRender(): void {}
  protected abstract render(): void;
  protected afterRender(): void {}
  protected abstract save(): Promise<void>;
}
