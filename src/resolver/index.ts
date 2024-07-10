class BeginId {

    APIKEY:string;

    constructor(apikey:string) {
        this.APIKEY = apikey;
    }

    domainUrl = '.bgin.id';

    resolveAddress = async (name: string) => {
        let chainNumber = 1815;

        // TODO: Implement Chain parser
        // chaintoId(chain)

        try {
        const result = await fetch(
            'https://resolveidaddress-ylo5dtxzdq-uc.a.run.app',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.APIKEY,
            },
            body: JSON.stringify({
                name: name.replace('@', '').replace(/(\.bgin\.id|\.beginid\.io|\.bgn\.is)$/, ''),
                chain: chainNumber,
            }),
            }
        )
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(res => {
            return res.result;
            })
            .catch(err => {
            console.error(err);
            throw new Error('Not able to collect token.');
            });

        return {
            name: result.name,
            domain: `${''.concat(result.name, this.domainUrl)}`,
            image: result.image,
            address: result.addresses[chainNumber],
            text: result.text,
        };
        } catch (error) {
            return null;
        }
    };

    resolveAdressReverse = async (address: string) => {
        let chainNumber = 1815;

        // TODO: Implement Chain parser
        // chaintoId(chain)

        try {
        const result = await fetch(
            'https://resolveIdReserveAddress-ylo5dtxzdq-uc.a.run.app',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.APIKEY,
            },
            body: JSON.stringify({ address: address, chain: chainNumber }),
            }
        )
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(res => {
            return res.result;
            })
            .catch(err => {
            console.error(err);
            throw new Error('Not able to collect token.');
            });

        return {
            name: result.name,
            domain: `${''.concat(result.name, this.domainUrl)}`,
            image: result.image,
            address: result.addresses[chainNumber],
        };
        } catch (error) {
            return null;
        }
    };
}

export default BeginId;
