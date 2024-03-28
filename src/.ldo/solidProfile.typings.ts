import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for solidProfile
 * =============================================================================
 */

/**
 * SolidProfileShape Type
 */
export interface SolidProfileShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Defines the node as a Person (from Schema.org) | Defines the node as a Person (from foaf)
   */
  type: (
    | {
        "@id": "Person";
      }
    | {
        "@id": "Person2";
      }
  )[];
  /**
   * The formatted name of a person. Example: John Smith
   */
  fn?: string;
  /**
   * An alternate way to define a person's name.
   */
  name?: string;
  /**
   * The person's street address.
   */
  hasAddress?: AddressShape[];
  /**
   * The person's email.
   */
  hasEmail?: EmailShape[];
  /**
   * A link to the person's photo
   */
  hasPhoto?: {
    "@id": string;
  };
  /**
   * Photo link but in string form
   */
  img?: string;
  /**
   * Person's telephone number
   */
  hasTelephone?: PhoneNumberShape[];
  /**
   * An alternative way to define a person's telephone number using a string
   */
  phone?: string;
  /**
   * The name of the organization with which the person is affiliated
   */
  organizationName?: string;
  /**
   * The name of the person's role in their organization
   */
  role?: string;
  /**
   * A list of app origins that are trusted by this user
   */
  trustedApp?: TrustedAppShape[];
  /**
   * A list of RSA public keys that are associated with private keys the user holds.
   */
  key?: RSAPublicKeyShape[];
  /**
   * The user's LDP inbox to which apps can post notifications
   */
  inbox: {
    "@id": string;
  };
  /**
   * The user's preferences
   */
  preferencesFile?: {
    "@id": string;
  };
  /**
   * The location of a Solid storage server related to this WebId
   */
  storage?: {
    "@id": string;
  }[];
  /**
   * The user's account
   */
  account?: {
    "@id": string;
  };
  /**
   * A registry of all types used on the user's Pod (for private access only)
   */
  privateTypeIndex?: {
    "@id": string;
  }[];
  /**
   * A registry of all types used on the user's Pod (for public access)
   */
  publicTypeIndex?: {
    "@id": string;
  }[];
  /**
   * A list of WebIds for all the people this user knows.
   */
  knows?: {
    "@id": string;
  }[];
}

/**
 * AddressShape Type
 */
export interface AddressShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * The name of the user's country of residence
   */
  countryName?: string;
  /**
   * The name of the user's locality (City, Town etc.) of residence
   */
  locality?: string;
  /**
   * The user's postal code
   */
  postalCode?: string;
  /**
   * The name of the user's region (State, Province etc.) of residence
   */
  region?: string;
  /**
   * The user's street address
   */
  streetAddress?: string;
}

/**
 * EmailShape Type
 */
export interface EmailShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * The type of email.
   */
  type?:
    | {
        "@id": "Dom";
      }
    | {
        "@id": "Home";
      }
    | {
        "@id": "ISDN";
      }
    | {
        "@id": "Internet";
      }
    | {
        "@id": "Intl";
      }
    | {
        "@id": "Label";
      }
    | {
        "@id": "Parcel";
      }
    | {
        "@id": "Postal";
      }
    | {
        "@id": "Pref";
      }
    | {
        "@id": "Work";
      }
    | {
        "@id": "X400";
      };
  /**
   * The value of an email as a mailto link (Example <mailto:jane@example.com>)
   */
  value: {
    "@id": string;
  };
}

/**
 * PhoneNumberShape Type
 */
export interface PhoneNumberShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * They type of Phone Number
   */
  type?:
    | {
        "@id": "Dom";
      }
    | {
        "@id": "Home";
      }
    | {
        "@id": "ISDN";
      }
    | {
        "@id": "Internet";
      }
    | {
        "@id": "Intl";
      }
    | {
        "@id": "Label";
      }
    | {
        "@id": "Parcel";
      }
    | {
        "@id": "Postal";
      }
    | {
        "@id": "Pref";
      }
    | {
        "@id": "Work";
      }
    | {
        "@id": "X400";
      };
  /**
   * The value of a phone number as a tel link (Example <tel:555-555-5555>)
   */
  value: {
    "@id": string;
  };
}

/**
 * TrustedAppShape Type
 */
export interface TrustedAppShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * The level of access provided to this origin
   */
  mode: (
    | {
        "@id": "Append";
      }
    | {
        "@id": "Control";
      }
    | {
        "@id": "Read";
      }
    | {
        "@id": "Write";
      }
  )[];
  /**
   * The app origin the user trusts
   */
  origin: {
    "@id": string;
  };
}

/**
 * RSAPublicKeyShape Type
 */
export interface RSAPublicKeyShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * RSA Modulus
   */
  modulus: string;
  /**
   * RSA Exponent
   */
  exponent: number;
}
