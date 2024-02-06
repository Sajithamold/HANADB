namespace app.DemoCapCDS1;

using { Country } from '@sap/cds/common';
type BusinessKey : String(10);
type SDate : DateTime;
 
entity partner {
  key ID : Integer;
  PARTNER  : BusinessKey;
  LOG_DATE  : SDate;
  BPCOUNTRY : Country;
};
 