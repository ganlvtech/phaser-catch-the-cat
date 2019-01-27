import FakeXHRLoader from "./FakeXHRLoader";

export default class RawFile extends Phaser.Loader.File {
    rawData: string;

    constructor(loader: Phaser.Loader.LoaderPlugin, type: string, key: string, data: string) {
        super(loader, {
            type: type,
            key: key,
        });
        this.rawData = data;
    }

    load(): void {
        if (this.state === Phaser.Loader.FILE_POPULATED) {
            this.loader.nextFile(this, true);
        } else {
            this.xhrLoader = FakeXHRLoader(this, this.loader.xhr);
        }
    }
}
