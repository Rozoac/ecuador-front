
export class Payu {
    constructor(
        public merchantId?: number,
        public referenceCode?: string,
        public description?: string,
        public amount?: number,
        public tax?: number,
        public taxReturnBase?: number,
        public signature?: string,
        public accountId?: number,
        public currency?: string,
        public buyerFullName?: string,
        public buyerEmail?: string,
        public shippingAddress?: string,
        public shippingCity?: string,
        public shippingCountry?: string,
        public telephone?: string,
        public test?: number,
        public confirmationUrl?: number,
    ) { }
}
