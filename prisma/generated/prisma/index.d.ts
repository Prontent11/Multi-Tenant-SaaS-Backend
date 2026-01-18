
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SuperAdmin
 * 
 */
export type SuperAdmin = $Result.DefaultSelection<Prisma.$SuperAdminPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationAdmin
 * 
 */
export type OrganizationAdmin = $Result.DefaultSelection<Prisma.$OrganizationAdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrgRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  USER: 'USER'
};

export type OrgRole = (typeof OrgRole)[keyof typeof OrgRole]


export const OrgStatus: {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED'
};

export type OrgStatus = (typeof OrgStatus)[keyof typeof OrgStatus]

}

export type OrgRole = $Enums.OrgRole

export const OrgRole: typeof $Enums.OrgRole

export type OrgStatus = $Enums.OrgStatus

export const OrgStatus: typeof $Enums.OrgStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SuperAdmins
 * const superAdmins = await prisma.superAdmin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SuperAdmins
   * const superAdmins = await prisma.superAdmin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.superAdmin`: Exposes CRUD operations for the **SuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.SuperAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationAdmin`: Exposes CRUD operations for the **OrganizationAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationAdmins
    * const organizationAdmins = await prisma.organizationAdmin.findMany()
    * ```
    */
  get organizationAdmin(): Prisma.OrganizationAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SuperAdmin: 'SuperAdmin',
    Organization: 'Organization',
    OrganizationAdmin: 'OrganizationAdmin',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "superAdmin" | "organization" | "organizationAdmin" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SuperAdmin: {
        payload: Prisma.$SuperAdminPayload<ExtArgs>
        fields: Prisma.SuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findMany: {
            args: Prisma.SuperAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          create: {
            args: Prisma.SuperAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          createMany: {
            args: Prisma.SuperAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuperAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          update: {
            args: Prisma.SuperAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.SuperAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationAdmin: {
        payload: Prisma.$OrganizationAdminPayload<ExtArgs>
        fields: Prisma.OrganizationAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload>
          }
          findFirst: {
            args: Prisma.OrganizationAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload>
          }
          findMany: {
            args: Prisma.OrganizationAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload>[]
          }
          create: {
            args: Prisma.OrganizationAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload>
          }
          createMany: {
            args: Prisma.OrganizationAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload>
          }
          update: {
            args: Prisma.OrganizationAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationAdminPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationAdmin>
          }
          groupBy: {
            args: Prisma.OrganizationAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationAdminCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationAdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    superAdmin?: SuperAdminOmit
    organization?: OrganizationOmit
    organizationAdmin?: OrganizationAdminOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    admins: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    admins?: boolean | OrganizationCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationAdminWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SuperAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _avg: SuperAdminAvgAggregateOutputType | null
    _sum: SuperAdminSumAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminAvgAggregateOutputType = {
    id: number | null
  }

  export type SuperAdminSumAggregateOutputType = {
    id: number | null
  }

  export type SuperAdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SuperAdminCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type SuperAdminAvgAggregateInputType = {
    id?: true
  }

  export type SuperAdminSumAggregateInputType = {
    id?: true
  }

  export type SuperAdminMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
  }

  export type SuperAdminCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmin to aggregate.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuperAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuperAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type SuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminWhereInput
    orderBy?: SuperAdminOrderByWithAggregationInput | SuperAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: SuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _avg?: SuperAdminAvgAggregateInputType
    _sum?: SuperAdminSumAggregateInputType
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    isActive: boolean
    createdAt: Date
    _count: SuperAdminCountAggregateOutputType | null
    _avg: SuperAdminAvgAggregateOutputType | null
    _sum: SuperAdminSumAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends SuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["superAdmin"]>



  export type SuperAdminSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type SuperAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "isActive" | "createdAt", ExtArgs["result"]["superAdmin"]>

  export type $SuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }

  type SuperAdminGetPayload<S extends boolean | null | undefined | SuperAdminDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminPayload, S>

  type SuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface SuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmin'], meta: { name: 'SuperAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {SuperAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminFindUniqueArgs>(args: SelectSubset<T, SuperAdminFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminFindFirstArgs>(args?: SelectSubset<T, SuperAdminFindFirstArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminFindManyArgs>(args?: SelectSubset<T, SuperAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperAdmin.
     * @param {SuperAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
     */
    create<T extends SuperAdminCreateArgs>(args: SelectSubset<T, SuperAdminCreateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperAdmins.
     * @param {SuperAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminCreateManyArgs>(args?: SelectSubset<T, SuperAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuperAdmin.
     * @param {SuperAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminDeleteArgs>(args: SelectSubset<T, SuperAdminDeleteArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperAdmin.
     * @param {SuperAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminUpdateArgs>(args: SelectSubset<T, SuperAdminUpdateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminDeleteManyArgs>(args?: SelectSubset<T, SuperAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminUpdateManyArgs>(args: SelectSubset<T, SuperAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdmin.
     * @param {SuperAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminUpsertArgs>(args: SelectSubset<T, SuperAdminUpsertArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminCountArgs>(
      args?: Subset<T, SuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmin model
   */
  readonly fields: SuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuperAdmin model
   */
  interface SuperAdminFieldRefs {
    readonly id: FieldRef<"SuperAdmin", 'Int'>
    readonly email: FieldRef<"SuperAdmin", 'String'>
    readonly passwordHash: FieldRef<"SuperAdmin", 'String'>
    readonly isActive: FieldRef<"SuperAdmin", 'Boolean'>
    readonly createdAt: FieldRef<"SuperAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdmin findUnique
   */
  export type SuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findUniqueOrThrow
   */
  export type SuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findFirst
   */
  export type SuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findFirstOrThrow
   */
  export type SuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findMany
   */
  export type SuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin create
   */
  export type SuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmin.
     */
    data: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
  }

  /**
   * SuperAdmin createMany
   */
  export type SuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin update
   */
  export type SuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmin.
     */
    data: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmin to update.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin updateMany
   */
  export type SuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
    /**
     * Limit how many SuperAdmins to update.
     */
    limit?: number
  }

  /**
   * SuperAdmin upsert
   */
  export type SuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmin to update in case it exists.
     */
    where: SuperAdminWhereUniqueInput
    /**
     * In case the SuperAdmin found by the `where` argument doesn't exist, create a new SuperAdmin with this data.
     */
    create: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
    /**
     * In case the SuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
  }

  /**
   * SuperAdmin delete
   */
  export type SuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
    /**
     * Filter which SuperAdmin to delete.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin deleteMany
   */
  export type SuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminWhereInput
    /**
     * Limit how many SuperAdmins to delete.
     */
    limit?: number
  }

  /**
   * SuperAdmin without action
   */
  export type SuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmin
     */
    omit?: SuperAdminOmit<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.OrgStatus | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.OrgStatus | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    status: $Enums.OrgStatus
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    admins?: boolean | Organization$adminsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "createdAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    admins?: boolean | Organization$adminsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      admins: Prisma.$OrganizationAdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.OrgStatus
      createdAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends Organization$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly status: FieldRef<"Organization", 'OrgStatus'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.admins
   */
  export type Organization$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    where?: OrganizationAdminWhereInput
    orderBy?: OrganizationAdminOrderByWithRelationInput | OrganizationAdminOrderByWithRelationInput[]
    cursor?: OrganizationAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationAdminScalarFieldEnum | OrganizationAdminScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationAdmin
   */

  export type AggregateOrganizationAdmin = {
    _count: OrganizationAdminCountAggregateOutputType | null
    _avg: OrganizationAdminAvgAggregateOutputType | null
    _sum: OrganizationAdminSumAggregateOutputType | null
    _min: OrganizationAdminMinAggregateOutputType | null
    _max: OrganizationAdminMaxAggregateOutputType | null
  }

  export type OrganizationAdminAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type OrganizationAdminSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type OrganizationAdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    organizationId: number | null
  }

  export type OrganizationAdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    organizationId: number | null
  }

  export type OrganizationAdminCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    isActive: number
    organizationId: number
    _all: number
  }


  export type OrganizationAdminAvgAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type OrganizationAdminSumAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type OrganizationAdminMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    organizationId?: true
  }

  export type OrganizationAdminMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    organizationId?: true
  }

  export type OrganizationAdminCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    organizationId?: true
    _all?: true
  }

  export type OrganizationAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationAdmin to aggregate.
     */
    where?: OrganizationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationAdmins to fetch.
     */
    orderBy?: OrganizationAdminOrderByWithRelationInput | OrganizationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationAdmins
    **/
    _count?: true | OrganizationAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationAdminMaxAggregateInputType
  }

  export type GetOrganizationAdminAggregateType<T extends OrganizationAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationAdmin[P]>
      : GetScalarType<T[P], AggregateOrganizationAdmin[P]>
  }




  export type OrganizationAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationAdminWhereInput
    orderBy?: OrganizationAdminOrderByWithAggregationInput | OrganizationAdminOrderByWithAggregationInput[]
    by: OrganizationAdminScalarFieldEnum[] | OrganizationAdminScalarFieldEnum
    having?: OrganizationAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationAdminCountAggregateInputType | true
    _avg?: OrganizationAdminAvgAggregateInputType
    _sum?: OrganizationAdminSumAggregateInputType
    _min?: OrganizationAdminMinAggregateInputType
    _max?: OrganizationAdminMaxAggregateInputType
  }

  export type OrganizationAdminGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    isActive: boolean
    organizationId: number
    _count: OrganizationAdminCountAggregateOutputType | null
    _avg: OrganizationAdminAvgAggregateOutputType | null
    _sum: OrganizationAdminSumAggregateOutputType | null
    _min: OrganizationAdminMinAggregateOutputType | null
    _max: OrganizationAdminMaxAggregateOutputType | null
  }

  type GetOrganizationAdminGroupByPayload<T extends OrganizationAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationAdminGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationAdminGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationAdmin"]>



  export type OrganizationAdminSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    organizationId?: boolean
  }

  export type OrganizationAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "isActive" | "organizationId", ExtArgs["result"]["organizationAdmin"]>
  export type OrganizationAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationAdmin"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      isActive: boolean
      organizationId: number
    }, ExtArgs["result"]["organizationAdmin"]>
    composites: {}
  }

  type OrganizationAdminGetPayload<S extends boolean | null | undefined | OrganizationAdminDefaultArgs> = $Result.GetResult<Prisma.$OrganizationAdminPayload, S>

  type OrganizationAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationAdminCountAggregateInputType | true
    }

  export interface OrganizationAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationAdmin'], meta: { name: 'OrganizationAdmin' } }
    /**
     * Find zero or one OrganizationAdmin that matches the filter.
     * @param {OrganizationAdminFindUniqueArgs} args - Arguments to find a OrganizationAdmin
     * @example
     * // Get one OrganizationAdmin
     * const organizationAdmin = await prisma.organizationAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationAdminFindUniqueArgs>(args: SelectSubset<T, OrganizationAdminFindUniqueArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationAdminFindUniqueOrThrowArgs} args - Arguments to find a OrganizationAdmin
     * @example
     * // Get one OrganizationAdmin
     * const organizationAdmin = await prisma.organizationAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAdminFindFirstArgs} args - Arguments to find a OrganizationAdmin
     * @example
     * // Get one OrganizationAdmin
     * const organizationAdmin = await prisma.organizationAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationAdminFindFirstArgs>(args?: SelectSubset<T, OrganizationAdminFindFirstArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAdminFindFirstOrThrowArgs} args - Arguments to find a OrganizationAdmin
     * @example
     * // Get one OrganizationAdmin
     * const organizationAdmin = await prisma.organizationAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationAdmins
     * const organizationAdmins = await prisma.organizationAdmin.findMany()
     * 
     * // Get first 10 OrganizationAdmins
     * const organizationAdmins = await prisma.organizationAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationAdminWithIdOnly = await prisma.organizationAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationAdminFindManyArgs>(args?: SelectSubset<T, OrganizationAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationAdmin.
     * @param {OrganizationAdminCreateArgs} args - Arguments to create a OrganizationAdmin.
     * @example
     * // Create one OrganizationAdmin
     * const OrganizationAdmin = await prisma.organizationAdmin.create({
     *   data: {
     *     // ... data to create a OrganizationAdmin
     *   }
     * })
     * 
     */
    create<T extends OrganizationAdminCreateArgs>(args: SelectSubset<T, OrganizationAdminCreateArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationAdmins.
     * @param {OrganizationAdminCreateManyArgs} args - Arguments to create many OrganizationAdmins.
     * @example
     * // Create many OrganizationAdmins
     * const organizationAdmin = await prisma.organizationAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationAdminCreateManyArgs>(args?: SelectSubset<T, OrganizationAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrganizationAdmin.
     * @param {OrganizationAdminDeleteArgs} args - Arguments to delete one OrganizationAdmin.
     * @example
     * // Delete one OrganizationAdmin
     * const OrganizationAdmin = await prisma.organizationAdmin.delete({
     *   where: {
     *     // ... filter to delete one OrganizationAdmin
     *   }
     * })
     * 
     */
    delete<T extends OrganizationAdminDeleteArgs>(args: SelectSubset<T, OrganizationAdminDeleteArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationAdmin.
     * @param {OrganizationAdminUpdateArgs} args - Arguments to update one OrganizationAdmin.
     * @example
     * // Update one OrganizationAdmin
     * const organizationAdmin = await prisma.organizationAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationAdminUpdateArgs>(args: SelectSubset<T, OrganizationAdminUpdateArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationAdmins.
     * @param {OrganizationAdminDeleteManyArgs} args - Arguments to filter OrganizationAdmins to delete.
     * @example
     * // Delete a few OrganizationAdmins
     * const { count } = await prisma.organizationAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationAdminDeleteManyArgs>(args?: SelectSubset<T, OrganizationAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationAdmins
     * const organizationAdmin = await prisma.organizationAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationAdminUpdateManyArgs>(args: SelectSubset<T, OrganizationAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrganizationAdmin.
     * @param {OrganizationAdminUpsertArgs} args - Arguments to update or create a OrganizationAdmin.
     * @example
     * // Update or create a OrganizationAdmin
     * const organizationAdmin = await prisma.organizationAdmin.upsert({
     *   create: {
     *     // ... data to create a OrganizationAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationAdmin we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationAdminUpsertArgs>(args: SelectSubset<T, OrganizationAdminUpsertArgs<ExtArgs>>): Prisma__OrganizationAdminClient<$Result.GetResult<Prisma.$OrganizationAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAdminCountArgs} args - Arguments to filter OrganizationAdmins to count.
     * @example
     * // Count the number of OrganizationAdmins
     * const count = await prisma.organizationAdmin.count({
     *   where: {
     *     // ... the filter for the OrganizationAdmins we want to count
     *   }
     * })
    **/
    count<T extends OrganizationAdminCountArgs>(
      args?: Subset<T, OrganizationAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAdminAggregateArgs>(args: Subset<T, OrganizationAdminAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAdminAggregateType<T>>

    /**
     * Group by OrganizationAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationAdminGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationAdmin model
   */
  readonly fields: OrganizationAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationAdmin model
   */
  interface OrganizationAdminFieldRefs {
    readonly id: FieldRef<"OrganizationAdmin", 'Int'>
    readonly email: FieldRef<"OrganizationAdmin", 'String'>
    readonly passwordHash: FieldRef<"OrganizationAdmin", 'String'>
    readonly isActive: FieldRef<"OrganizationAdmin", 'Boolean'>
    readonly organizationId: FieldRef<"OrganizationAdmin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationAdmin findUnique
   */
  export type OrganizationAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationAdmin to fetch.
     */
    where: OrganizationAdminWhereUniqueInput
  }

  /**
   * OrganizationAdmin findUniqueOrThrow
   */
  export type OrganizationAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationAdmin to fetch.
     */
    where: OrganizationAdminWhereUniqueInput
  }

  /**
   * OrganizationAdmin findFirst
   */
  export type OrganizationAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationAdmin to fetch.
     */
    where?: OrganizationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationAdmins to fetch.
     */
    orderBy?: OrganizationAdminOrderByWithRelationInput | OrganizationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationAdmins.
     */
    cursor?: OrganizationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationAdmins.
     */
    distinct?: OrganizationAdminScalarFieldEnum | OrganizationAdminScalarFieldEnum[]
  }

  /**
   * OrganizationAdmin findFirstOrThrow
   */
  export type OrganizationAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationAdmin to fetch.
     */
    where?: OrganizationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationAdmins to fetch.
     */
    orderBy?: OrganizationAdminOrderByWithRelationInput | OrganizationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationAdmins.
     */
    cursor?: OrganizationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationAdmins.
     */
    distinct?: OrganizationAdminScalarFieldEnum | OrganizationAdminScalarFieldEnum[]
  }

  /**
   * OrganizationAdmin findMany
   */
  export type OrganizationAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationAdmins to fetch.
     */
    where?: OrganizationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationAdmins to fetch.
     */
    orderBy?: OrganizationAdminOrderByWithRelationInput | OrganizationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationAdmins.
     */
    cursor?: OrganizationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationAdmins.
     */
    skip?: number
    distinct?: OrganizationAdminScalarFieldEnum | OrganizationAdminScalarFieldEnum[]
  }

  /**
   * OrganizationAdmin create
   */
  export type OrganizationAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationAdmin.
     */
    data: XOR<OrganizationAdminCreateInput, OrganizationAdminUncheckedCreateInput>
  }

  /**
   * OrganizationAdmin createMany
   */
  export type OrganizationAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationAdmins.
     */
    data: OrganizationAdminCreateManyInput | OrganizationAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationAdmin update
   */
  export type OrganizationAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationAdmin.
     */
    data: XOR<OrganizationAdminUpdateInput, OrganizationAdminUncheckedUpdateInput>
    /**
     * Choose, which OrganizationAdmin to update.
     */
    where: OrganizationAdminWhereUniqueInput
  }

  /**
   * OrganizationAdmin updateMany
   */
  export type OrganizationAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationAdmins.
     */
    data: XOR<OrganizationAdminUpdateManyMutationInput, OrganizationAdminUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationAdmins to update
     */
    where?: OrganizationAdminWhereInput
    /**
     * Limit how many OrganizationAdmins to update.
     */
    limit?: number
  }

  /**
   * OrganizationAdmin upsert
   */
  export type OrganizationAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationAdmin to update in case it exists.
     */
    where: OrganizationAdminWhereUniqueInput
    /**
     * In case the OrganizationAdmin found by the `where` argument doesn't exist, create a new OrganizationAdmin with this data.
     */
    create: XOR<OrganizationAdminCreateInput, OrganizationAdminUncheckedCreateInput>
    /**
     * In case the OrganizationAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationAdminUpdateInput, OrganizationAdminUncheckedUpdateInput>
  }

  /**
   * OrganizationAdmin delete
   */
  export type OrganizationAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
    /**
     * Filter which OrganizationAdmin to delete.
     */
    where: OrganizationAdminWhereUniqueInput
  }

  /**
   * OrganizationAdmin deleteMany
   */
  export type OrganizationAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationAdmins to delete
     */
    where?: OrganizationAdminWhereInput
    /**
     * Limit how many OrganizationAdmins to delete.
     */
    limit?: number
  }

  /**
   * OrganizationAdmin without action
   */
  export type OrganizationAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationAdmin
     */
    select?: OrganizationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationAdmin
     */
    omit?: OrganizationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationAdminInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    role: $Enums.OrgRole | null
    createdAt: Date | null
    organizationId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    role: $Enums.OrgRole | null
    createdAt: Date | null
    organizationId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    isActive: number
    role: number
    createdAt: number
    organizationId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    role?: true
    createdAt?: true
    organizationId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    role?: true
    createdAt?: true
    organizationId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isActive?: true
    role?: true
    createdAt?: true
    organizationId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    isActive: boolean
    role: $Enums.OrgRole
    createdAt: Date
    organizationId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    role?: boolean
    createdAt?: boolean
    organizationId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "isActive" | "role" | "createdAt" | "organizationId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      isActive: boolean
      role: $Enums.OrgRole
      createdAt: Date
      organizationId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'OrgRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly organizationId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SuperAdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationAdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    organizationId: 'organizationId'
  };

  export type OrganizationAdminScalarFieldEnum = (typeof OrganizationAdminScalarFieldEnum)[keyof typeof OrganizationAdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    role: 'role',
    createdAt: 'createdAt',
    organizationId: 'organizationId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SuperAdminOrderByRelevanceFieldEnum: {
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type SuperAdminOrderByRelevanceFieldEnum = (typeof SuperAdminOrderByRelevanceFieldEnum)[keyof typeof SuperAdminOrderByRelevanceFieldEnum]


  export const OrganizationOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type OrganizationOrderByRelevanceFieldEnum = (typeof OrganizationOrderByRelevanceFieldEnum)[keyof typeof OrganizationOrderByRelevanceFieldEnum]


  export const OrganizationAdminOrderByRelevanceFieldEnum: {
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type OrganizationAdminOrderByRelevanceFieldEnum = (typeof OrganizationAdminOrderByRelevanceFieldEnum)[keyof typeof OrganizationAdminOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'OrgStatus'
   */
  export type EnumOrgStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgStatus'>
    


  /**
   * Reference to a field of type 'OrgRole'
   */
  export type EnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SuperAdminWhereInput = {
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    id?: IntFilter<"SuperAdmin"> | number
    email?: StringFilter<"SuperAdmin"> | string
    passwordHash?: StringFilter<"SuperAdmin"> | string
    isActive?: BoolFilter<"SuperAdmin"> | boolean
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }

  export type SuperAdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _relevance?: SuperAdminOrderByRelevanceInput
  }

  export type SuperAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    passwordHash?: StringFilter<"SuperAdmin"> | string
    isActive?: BoolFilter<"SuperAdmin"> | boolean
    createdAt?: DateTimeFilter<"SuperAdmin"> | Date | string
  }, "id" | "email">

  export type SuperAdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: SuperAdminCountOrderByAggregateInput
    _avg?: SuperAdminAvgOrderByAggregateInput
    _max?: SuperAdminMaxOrderByAggregateInput
    _min?: SuperAdminMinOrderByAggregateInput
    _sum?: SuperAdminSumOrderByAggregateInput
  }

  export type SuperAdminScalarWhereWithAggregatesInput = {
    AND?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    OR?: SuperAdminScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SuperAdmin"> | number
    email?: StringWithAggregatesFilter<"SuperAdmin"> | string
    passwordHash?: StringWithAggregatesFilter<"SuperAdmin"> | string
    isActive?: BoolWithAggregatesFilter<"SuperAdmin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    status?: EnumOrgStatusFilter<"Organization"> | $Enums.OrgStatus
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    admins?: OrganizationAdminListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    admins?: OrganizationAdminOrderByRelationAggregateInput
    _relevance?: OrganizationOrderByRelevanceInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    status?: EnumOrgStatusFilter<"Organization"> | $Enums.OrgStatus
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    admins?: OrganizationAdminListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    status?: EnumOrgStatusWithAggregatesFilter<"Organization"> | $Enums.OrgStatus
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrganizationAdminWhereInput = {
    AND?: OrganizationAdminWhereInput | OrganizationAdminWhereInput[]
    OR?: OrganizationAdminWhereInput[]
    NOT?: OrganizationAdminWhereInput | OrganizationAdminWhereInput[]
    id?: IntFilter<"OrganizationAdmin"> | number
    email?: StringFilter<"OrganizationAdmin"> | string
    passwordHash?: StringFilter<"OrganizationAdmin"> | string
    isActive?: BoolFilter<"OrganizationAdmin"> | boolean
    organizationId?: IntFilter<"OrganizationAdmin"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationAdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    _relevance?: OrganizationAdminOrderByRelevanceInput
  }

  export type OrganizationAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: OrganizationAdminWhereInput | OrganizationAdminWhereInput[]
    OR?: OrganizationAdminWhereInput[]
    NOT?: OrganizationAdminWhereInput | OrganizationAdminWhereInput[]
    passwordHash?: StringFilter<"OrganizationAdmin"> | string
    isActive?: BoolFilter<"OrganizationAdmin"> | boolean
    organizationId?: IntFilter<"OrganizationAdmin"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "email">

  export type OrganizationAdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    organizationId?: SortOrder
    _count?: OrganizationAdminCountOrderByAggregateInput
    _avg?: OrganizationAdminAvgOrderByAggregateInput
    _max?: OrganizationAdminMaxOrderByAggregateInput
    _min?: OrganizationAdminMinOrderByAggregateInput
    _sum?: OrganizationAdminSumOrderByAggregateInput
  }

  export type OrganizationAdminScalarWhereWithAggregatesInput = {
    AND?: OrganizationAdminScalarWhereWithAggregatesInput | OrganizationAdminScalarWhereWithAggregatesInput[]
    OR?: OrganizationAdminScalarWhereWithAggregatesInput[]
    NOT?: OrganizationAdminScalarWhereWithAggregatesInput | OrganizationAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrganizationAdmin"> | number
    email?: StringWithAggregatesFilter<"OrganizationAdmin"> | string
    passwordHash?: StringWithAggregatesFilter<"OrganizationAdmin"> | string
    isActive?: BoolWithAggregatesFilter<"OrganizationAdmin"> | boolean
    organizationId?: IntWithAggregatesFilter<"OrganizationAdmin"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumOrgRoleFilter<"User"> | $Enums.OrgRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: IntFilter<"User"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumOrgRoleFilter<"User"> | $Enums.OrgRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: IntFilter<"User"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumOrgRoleWithAggregatesFilter<"User"> | $Enums.OrgRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    organizationId?: IntWithAggregatesFilter<"User"> | number
  }

  export type SuperAdminCreateInput = {
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SuperAdminUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SuperAdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SuperAdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    name: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    admins?: OrganizationAdminCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    admins?: OrganizationAdminUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    admins?: OrganizationAdminUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    admins?: OrganizationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationAdminCreateInput = {
    email: string
    passwordHash: string
    isActive?: boolean
    organization: OrganizationCreateNestedOneWithoutAdminsInput
  }

  export type OrganizationAdminUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    organizationId: number
  }

  export type OrganizationAdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type OrganizationAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizationAdminCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    organizationId: number
  }

  export type OrganizationAdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizationAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    isActive?: boolean
    role: $Enums.OrgRole
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    role: $Enums.OrgRole
    createdAt?: Date | string
    organizationId: number
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    role: $Enums.OrgRole
    createdAt?: Date | string
    organizationId: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SuperAdminOrderByRelevanceInput = {
    fields: SuperAdminOrderByRelevanceFieldEnum | SuperAdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SuperAdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SuperAdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuperAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SuperAdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SuperAdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumOrgStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[]
    notIn?: $Enums.OrgStatus[]
    not?: NestedEnumOrgStatusFilter<$PrismaModel> | $Enums.OrgStatus
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type OrganizationAdminListRelationFilter = {
    every?: OrganizationAdminWhereInput
    some?: OrganizationAdminWhereInput
    none?: OrganizationAdminWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelevanceInput = {
    fields: OrganizationOrderByRelevanceFieldEnum | OrganizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumOrgStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[]
    notIn?: $Enums.OrgStatus[]
    not?: NestedEnumOrgStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrgStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgStatusFilter<$PrismaModel>
    _max?: NestedEnumOrgStatusFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationAdminOrderByRelevanceInput = {
    fields: OrganizationAdminOrderByRelevanceFieldEnum | OrganizationAdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizationAdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    organizationId?: SortOrder
  }

  export type OrganizationAdminAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type OrganizationAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    organizationId?: SortOrder
  }

  export type OrganizationAdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    organizationId?: SortOrder
  }

  export type OrganizationAdminSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type EnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[]
    notIn?: $Enums.OrgRole[]
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organizationId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type EnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[]
    notIn?: $Enums.OrgRole[]
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrganizationAdminCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationAdminCreateWithoutOrganizationInput, OrganizationAdminUncheckedCreateWithoutOrganizationInput> | OrganizationAdminCreateWithoutOrganizationInput[] | OrganizationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationAdminCreateOrConnectWithoutOrganizationInput | OrganizationAdminCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationAdminCreateManyOrganizationInputEnvelope
    connect?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrganizationAdminUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationAdminCreateWithoutOrganizationInput, OrganizationAdminUncheckedCreateWithoutOrganizationInput> | OrganizationAdminCreateWithoutOrganizationInput[] | OrganizationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationAdminCreateOrConnectWithoutOrganizationInput | OrganizationAdminCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationAdminCreateManyOrganizationInputEnvelope
    connect?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
  }

  export type EnumOrgStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrgStatus
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationAdminUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationAdminCreateWithoutOrganizationInput, OrganizationAdminUncheckedCreateWithoutOrganizationInput> | OrganizationAdminCreateWithoutOrganizationInput[] | OrganizationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationAdminCreateOrConnectWithoutOrganizationInput | OrganizationAdminCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationAdminUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationAdminUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationAdminCreateManyOrganizationInputEnvelope
    set?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    disconnect?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    delete?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    connect?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    update?: OrganizationAdminUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationAdminUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationAdminUpdateManyWithWhereWithoutOrganizationInput | OrganizationAdminUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationAdminScalarWhereInput | OrganizationAdminScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationAdminUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationAdminCreateWithoutOrganizationInput, OrganizationAdminUncheckedCreateWithoutOrganizationInput> | OrganizationAdminCreateWithoutOrganizationInput[] | OrganizationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationAdminCreateOrConnectWithoutOrganizationInput | OrganizationAdminCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationAdminUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationAdminUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationAdminCreateManyOrganizationInputEnvelope
    set?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    disconnect?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    delete?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    connect?: OrganizationAdminWhereUniqueInput | OrganizationAdminWhereUniqueInput[]
    update?: OrganizationAdminUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationAdminUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationAdminUpdateManyWithWhereWithoutOrganizationInput | OrganizationAdminUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationAdminScalarWhereInput | OrganizationAdminScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutAdminsInput = {
    create?: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdminsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdminsInput
    upsert?: OrganizationUpsertWithoutAdminsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAdminsInput, OrganizationUpdateWithoutAdminsInput>, OrganizationUncheckedUpdateWithoutAdminsInput>
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumOrgRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrgRole
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrgStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[]
    notIn?: $Enums.OrgStatus[]
    not?: NestedEnumOrgStatusFilter<$PrismaModel> | $Enums.OrgStatus
  }

  export type NestedEnumOrgStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgStatus | EnumOrgStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrgStatus[]
    notIn?: $Enums.OrgStatus[]
    not?: NestedEnumOrgStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrgStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgStatusFilter<$PrismaModel>
    _max?: NestedEnumOrgStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[]
    notIn?: $Enums.OrgRole[]
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[]
    notIn?: $Enums.OrgRole[]
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrganizationInput = {
    email: string
    passwordHash: string
    isActive?: boolean
    role: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    role: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationAdminCreateWithoutOrganizationInput = {
    email: string
    passwordHash: string
    isActive?: boolean
  }

  export type OrganizationAdminUncheckedCreateWithoutOrganizationInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
  }

  export type OrganizationAdminCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationAdminWhereUniqueInput
    create: XOR<OrganizationAdminCreateWithoutOrganizationInput, OrganizationAdminUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationAdminCreateManyOrganizationInputEnvelope = {
    data: OrganizationAdminCreateManyOrganizationInput | OrganizationAdminCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    role?: EnumOrgRoleFilter<"User"> | $Enums.OrgRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: IntFilter<"User"> | number
  }

  export type OrganizationAdminUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationAdminWhereUniqueInput
    update: XOR<OrganizationAdminUpdateWithoutOrganizationInput, OrganizationAdminUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationAdminCreateWithoutOrganizationInput, OrganizationAdminUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationAdminUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationAdminWhereUniqueInput
    data: XOR<OrganizationAdminUpdateWithoutOrganizationInput, OrganizationAdminUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationAdminUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationAdminScalarWhereInput
    data: XOR<OrganizationAdminUpdateManyMutationInput, OrganizationAdminUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationAdminScalarWhereInput = {
    AND?: OrganizationAdminScalarWhereInput | OrganizationAdminScalarWhereInput[]
    OR?: OrganizationAdminScalarWhereInput[]
    NOT?: OrganizationAdminScalarWhereInput | OrganizationAdminScalarWhereInput[]
    id?: IntFilter<"OrganizationAdmin"> | number
    email?: StringFilter<"OrganizationAdmin"> | string
    passwordHash?: StringFilter<"OrganizationAdmin"> | string
    isActive?: BoolFilter<"OrganizationAdmin"> | boolean
    organizationId?: IntFilter<"OrganizationAdmin"> | number
  }

  export type OrganizationCreateWithoutAdminsInput = {
    name: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAdminsInput = {
    id?: number
    name: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAdminsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
  }

  export type OrganizationUpsertWithoutAdminsInput = {
    update: XOR<OrganizationUpdateWithoutAdminsInput, OrganizationUncheckedUpdateWithoutAdminsInput>
    create: XOR<OrganizationCreateWithoutAdminsInput, OrganizationUncheckedCreateWithoutAdminsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAdminsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAdminsInput, OrganizationUncheckedUpdateWithoutAdminsInput>
  }

  export type OrganizationUpdateWithoutAdminsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutUsersInput = {
    name: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    admins?: OrganizationAdminCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    status?: $Enums.OrgStatus
    createdAt?: Date | string
    admins?: OrganizationAdminUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: OrganizationAdminUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumOrgStatusFieldUpdateOperationsInput | $Enums.OrgStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: OrganizationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
    role: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type OrganizationAdminCreateManyOrganizationInput = {
    id?: number
    email: string
    passwordHash: string
    isActive?: boolean
  }

  export type UserUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationAdminUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizationAdminUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizationAdminUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}