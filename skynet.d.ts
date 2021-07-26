// Based on https://github.com/cloudwu/skynet/blob/master/lualib/skynet.lua

/** @noSelfInFile */

/** @noResolution */
declare module "skynet" {

    /*
        -- read skynet.h
        PTYPE_TEXT = 0,
        PTYPE_RESPONSE = 1,
        PTYPE_MULTICAST = 2,
        PTYPE_CLIENT = 3,
        PTYPE_SYSTEM = 4,
        PTYPE_HARBOR = 5,
        PTYPE_SOCKET = 6,
        PTYPE_ERROR = 7,
        PTYPE_QUEUE = 8,	-- used in deprecated mqueue, use skynet.queue instead
        PTYPE_DEBUG = 9,
        PTYPE_LUA = 10,
        PTYPE_SNAX = 11,
        PTYPE_TRACE = 12,	-- use for debug trace
    */

    const PTYPE_TEXT : number;
    const PTYPE_RESPONSE : number;
    const PTYPE_MULTICAST : number;
    const PTYPE_CLIENT : number;
    const PTYPE_SYSTEM : number;
    const PTYPE_HARBOR : number;
    const PTYPE_SOCKET : number;
    const PTYPE_ERROR : number;
    const PTYPE_QUEUE : number;
    const PTYPE_DEBUG : number;
    const PTYPE_LUA : number;
    const PTYPE_SNAX : number;
    const PTYPE_TRACE : number;

    /*
        skynet.cache = require "skynet.codecache"
    */

    /*
        function skynet.register_protocol(class)
    */
    function register_protocol(protocol: any) : void ;
    /*
        function skynet.request(obj)
    */
    function request(obj: any) : any ;
    /*
        function skynet.trace_timeout(on)
        skynet.trace_timeout(false)	-- turn off by default
    */
    function trace_timeout(on: () => void) : any ;
    /*
        function skynet.timeout(ti, func)
    */
    function timeout(ti: number, func: () => void) : any ;
    /*
        function skynet.sleep(ti, token)
    */
    function sleep(ti: number, token? : string) : string ;
    /*
        function skynet.yield()
    */
    function yield() : any ;
    /*
        function skynet.wait(token)
    */
    function wait(token : string) : void ;
    /*
        function skynet.killthread(thread)
    */
    function killthread(thread : string) : any ;
    /*
        function skynet.self()
    */
    function self() : any ;
    /*
        function skynet.localname(name)
    */
    function localname(name: string) : string ;
    /*
        function skynet.trace(info)
    */
    function trace(info: string) : void ;
    /*
        function skynet.tracetag()
    */
    function tracetag() : string ;
    /*
        function skynet.starttime()
    */
    function starttime() : number ;
    /*
        function skynet.time()
    */
    function time() : number ;
    /*
        function skynet.exit()
    */
    function exit() : void ;
    /*
        function skynet.getenv(key)
    */
    function getenv(key: string) : string ;
    /*
        function skynet.setenv(key, value)
    */
    function setenv(key: string, value: string) : void ;
    /*
        function skynet.send(addr, typename, ...)
    */
    function send(addr: string | number, typename: string, ...args:any[]) : void ;
    /*
        function skynet.rawsend(addr, typename, msg, sz)
    */
    function rawsend(addr: string | number, typename: string, msg: string, sz: string) : void ;
    /*
        skynet.genid
        skynet.redirect
        skynet.pack
        skynet.packstring
        skynet.unpack
        skynet.tostring
        skynet.trash
    */
    
    /*
        function skynet.call(addr, typename, ...)
    */
    function call(addr: string | number, typename: string, ...args:any[]) : LuaMultiReturn<any[]>;
    /*
        function skynet.rawcall(addr, typename, msg, sz)
    */
    function rawcall(addr: string | number, typename: string, msg: string, sz: string) : LuaMultiReturn<any[]> ;
    /*
        function skynet.tracecall(tag, addr, typename, msg, sz)
    */
    function tracecall(tag: string, addr: string | number, typename: string, msg: string, sz: string) : LuaMultiReturn<any[]> ;
    /*
        function skynet.ret(msg, sz)
    */
    function ret(msg: string, sz :string) : boolean ;
    /*
        function skynet.context()
        return co_session, co_address
    */
    function context() : LuaMultiReturn<string[]>;
    /*
        function skynet.ignoreret()
    */
    function ignoreret() : void ;
    /*
        function skynet.response(pack)
    */
    function response(pack: any) : any ;
    /*
        function skynet.retpack(...)
    */
    function retpack(args: any[]) : boolean ;
    /*
        function skynet.wakeup(token)
    */
    function wakeup(token: string) : boolean ;
    /*
        function skynet.dispatch(typename, func)
    */
    function dispatch(typename: string, func:  () => void) : any ;
    /*
        function skynet.dispatch_unknown_request(unknown)
    */

    /*
        function skynet.dispatch_unknown_response(unknown)
    */
    /*
        function skynet.fork(func,...)
    */
    /*
        function skynet.dispatch_message(...)
    */
    /*
        function skynet.newservice(name, ...)
    */
    /*
        function skynet.uniqueservice(global, ...)
    */
    /*
        function skynet.queryservice(global, ...)
    */
    /*
        function skynet.address(addr)
    */
    /*
        function skynet.harbor(addr)
    */
    /*
        skynet.error = c.error    
    */
    /*
        skynet.tracelog = c.trace
    */
    /*
        function skynet.traceproto(prototype, flag)
    */
    /*
        skynet.init = skynet_require.init
    */
    /*
        skynet.pcall = pcall
    */
    /*
        function skynet.init_service(start)
    */
    /*
        function skynet.start(start_func)
    */
    /*
        function skynet.endless()
    */
    /*
        function skynet.mqlen()
    */
    /*
        function skynet.stat(what)
    */
    /*
        function skynet.task(ret)
    */
    /*
        function skynet.term(service)
    */
}
