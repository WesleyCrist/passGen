export default class Codes {
    constructor() {}

    static get ok() { return { code: 200, title: 'ok' } }
    static get badRequest() { return {code: 400, title: 'badRequest' } }
    static get notFound() { return {code: 404, title: 'notFound'} }
    static get noContent() { return { code: 204, title: 'noContent' } }
}