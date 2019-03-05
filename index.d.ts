declare class MockXhr {
  constructor();

  // greeting: string;
  // showGreeting(): void;
}

// interface Routes {
//   method: string;
// }

interface HeaderKeyValues {
  [key: string]: string;
}

type RouteMatcherFn = (url: string) => boolean;
type RouteMatcher =  string | RegExp | RouteMatcherFn;

type RouteHandlerFn = (xhr: MockXhr) => boolean;
interface RouteHandlerObj {
  status?: number,
  headers?: HeaderKeyValues,
  body?: any,
  statusText?: string,
};
type RouteHandler =  RouteHandlerObj | RouteHandlerFn | RouteHandlerObj[] | RouteHandlerFn[];
// export type RequestLogEntry = {  };

declare class MockXhrServer {
  /**
   * Constructor
   *
   * @param {MockXhr} xhrMock XMLHttpRequest mock
   * @param {?Object} routes routes
   */
  constructor(xhrMock: MockXhr, routes: Object);

  /**
   * Install the server's XMLHttpRequest mock in the context. Revert with remove().
   *
   * @param {Object} context context object (e.g. global, window)
   * @returns {MockXhrServer} this
   */
  install(context: Object): MockXhrServer;

  /**
   * Remove the server as the global XMLHttpRequest mock. Reverts the actions of install(global).
   */
  remove(): void;

  /**
   * Add a GET request handler.
   *
   * @param {RouteMatcher} matcher url matcher
   * @param {RouteHandler} handler request handler
   * @returns {MockXhrServer} this
   */
  get(matcher: RouteMatcher, handler: RouteHandler): MochXhrServer;

  /**
   * Add a POST request handler.
   *
   * @param {RouteMatcher} matcher url matcher
   * @param {RouteHandler} handler request handler
   * @returns {MockXhrServer} this
   */
  post(matcher: RouteMatcher, handler: RouteHandler): MochXhrServer;

  /**
   * Add a PUT request handler.
   *
   * @param {RouteMatcher} matcher url matcher
   * @param {RouteHandler} handler request handler
   * @returns {MockXhrServer} this
   */
  put(matcher: RouteMatcher, handler: RouteHandler): MochXhrServer;

  /**
   * Add a DELETE request handler.
   *
   * @param {RouteMatcher} matcher url matcher
   * @param {RouteHandler} handler request handler
   * @returns {MockXhrServer} this
   */
  delete(matcher: RouteMatcher, handler: RouteHandler): MochXhrServer;

  /**
   * Add a request handler.
   *
   * @param {string} method HTTP method
   * @param {RouteMatcher} matcher url matcher
   * @param {RouteHandler} handler request handler
   * @returns {MockXhrServer} this
   */
  addHandler(method: string, matcher: RouteMatcher, handler: RouteHandler): MochXhrServer;

  /**
   * Set the default request handler for requests that don't match any route.
   *
   * @param {RouteHandler} handler request handler
   * @returns {MockXhrServer} this
   */
  setDefaultHandler(handler: RouteHandler): MochXhrServer;


  /**
   * Return 404 responses for requests that don't match any route.
   *
   * @returns {MockXhrServer} this
   */
  setDefault404(): MochXhrServer;


  /**
   * @returns {Object[]} list of requests received by the server. Entries: { method, url }
   */
  getRequestLog(handler: RouteHandler): Object[];
}

declare module 'mock-xmlhttprequest' {
  export = MockXhr;
  export = MockXhrServer;
  export function newMockXhr(): MockXhr;
  export function newServer(): MockXhrServer;
}
