db.nbastats.mapReduce(
    function () {
        yrStart = Math.trunc(this.Year / 5) * 5;
        yrEnd = yrStart + 4;
        pos = this.Pos.split('-')[0];

        emit ( {yrStart, yrEnd, pos}, this['3P%'] );
    },
    function (key, values) {
        return Array.sum(values) / values.length;
    },
    { out: "nbastats.avg3PtPctPerYrAndPos" }
);

db.nbastats.avg3PtPctPerYrAndPos.mapReduce(
    function() {
        emit ( 
            { yrStart: this._id.yrStart, yrEnd: this._id.yrEnd },
            this.value
        );
    },
    function (key, values) {
        return Array.sum(values) / values.length;
    },
    { out: "nbastats.avg3PtPctPerYr" }
);