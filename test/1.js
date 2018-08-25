describe('load yaml', async function () {

    it('from file', async function () {

        let qo = {
            query: 'where is my pink pooch'
        }
        let item = new Taggable(qo)
        let checkList = await loadTestData()
        let found = await item.findTags(checkList)
    })
})

const loadTestData = async function () {
    return ['a', 'b', 'c']
}

class Taggable {
    async findTags(checkItems) {
        let found = {
            syns: [],
            ents: [],
            pairs: []
        }

        for (let ent of checkItems) {
            console.log(ent)
        }
    }
}