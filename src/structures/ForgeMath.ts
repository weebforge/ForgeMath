import { ForgeClient, ForgeExtension } from "@tryforge/forgescript"
import { Constants } from "../constants"
import { join } from "node:path"


export class ForgeMath extends ForgeExtension {
  public name: string = "ForgeMath"
  public description: string = require("../../package.json").description
  public version: string = require("../../package.json").version

  public static Constants = Constants

  public init(client: ForgeClient): void {
    this.load(join(__dirname,"..", "functions"))
  }
}