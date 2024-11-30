export interface PostRequestInterface{
    reporter: string,
    title: string,
    desc: string,
    imageUrl: string,
    type: string,
    content: string,
}


export interface WrapperResponse {
    message:     string;
    status_code: number;
    data:        PostResponseInterface;
}

export interface PostResponseInterface {
    report_id:       number;
    report_slug:     string;
    report_title:    string;
    report_type:     string;
    report_reporter: string;
    report_image: string;
    report_desc:     string;
    report_content:  string;
    created_at:      string;
    updated_at:      string;
}
