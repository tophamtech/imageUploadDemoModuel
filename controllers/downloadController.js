// Basic function for downloading file extracted from URL path
function downloadEntry(req, res, next,srcDir){
    const file = `${srcDir}/${req.params.imageID}`;
    res.download(file)
}

module.exports = downloadEntry;