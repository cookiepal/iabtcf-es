import {RestrictionType} from '@cookiepal-labs/iabtcf-core';

export interface Restrictions {

  [purposeId: string]: {
    [vendorId: string]: RestrictionType;
  } | string;

}
