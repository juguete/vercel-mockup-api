export default async function requestLog(req, res, next) {
    req.time = new Date(Date.now()).toString();
    console.log(req.time, ' --- ', req.method,req.hostname, req.path);
    if( req.method === 'POST') {
        console.log('Body: ', JSON.stringify(req.body, null, 2));
    }
    next();
}