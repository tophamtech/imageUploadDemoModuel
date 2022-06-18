// Basic function for downloading file extracted from URL path
function downloadEntry(req, res, next){
    const file = `${__dirname}/../uploads/${req.params.imageID}`;
    res.download(file)
}

module.exports = downloadEntry;