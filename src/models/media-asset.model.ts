class Media {
    id: number;
    title: string;
    body: string;
    webUrl: string;

    constructor(id: number, title: string, body: string, webUrl: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.webUrl = webUrl;
    }
}