/** @noSelfInFile */

/** @noResolution */
declare module "cjson" {

    function encode(obj: any) : string ;

    function decode(data: string) : any ;

    function decode<T>(data: string) : T ;

}