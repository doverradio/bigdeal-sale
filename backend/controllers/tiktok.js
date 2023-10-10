
const log = console.log;


exports.getTikTokCode = async ( req, res ) =>
{
    try {
        let code = req.query.code //('code')
        log(`code: `, code)
        res.cookie("tikTokToken", `${ code }`, { expire: new Date() + 9999 });
    } catch ( e ) {
        log(`getTikTokCode e: `, e)
    }
}

