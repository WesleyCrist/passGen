export default class Codes {
    constructor() {}

    static get ok() { return { code: 200, title: 'ok' } }   // Ok
    static get noContent() { return { code: 204, title: 'noContent' } } // No content
    static get badRequest() { return {code: 400, title: 'badRequest' } }    // Bad Request
    static get notFound() { return {code: 404, title: 'notFound'} } // Not found
}