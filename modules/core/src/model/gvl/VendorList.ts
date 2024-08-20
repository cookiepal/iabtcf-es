import {IntMap} from '../IntMap.js';
import {Vendor} from './Vendor.js';
import {Declarations} from './Declarations.js';
import {GoogleVendor} from './GoogleVendor.js';

export interface VendorList extends Declarations {
  lastUpdated: string | Date;
  gvlSpecificationVersion: number;
  vendorListVersion: number;
  tcfPolicyVersion: number;
  vendors: IntMap<Vendor>;
  googleVendors: IntMap<GoogleVendor>;
}
