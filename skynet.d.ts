// Based on https://www.lua.org/manual/5.3/manual.html#6.8

/** @noSelfInFile */


declare namespace skynet {

    function call(service: string | number, proto: string, ...args:any[]) : LuaMultiReturn<any[]>;

}
