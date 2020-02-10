import { Injectable } from "@angular/core";

@Injectable()
export class SystemVariableProvider {
  public SYSTEM_PARAMS = {
    REGION: "ap-south-1",
    COGNITO_POOL: {
      UserPoolId: "ap-south-1_sCyTbSOPj",
      ClientId: "4ks3487s70e2ffrfi3ueeodg60"
    },
    COGNITO_IDENTITY: {
      IDENTITY_POOL_ID: "ap-south-1:879bfa66-3ab6-40ef-9383-3012718f81ce"
    },
    S3: {
      BUCKET_NAME: "mlcapture"
    }
  };
}
