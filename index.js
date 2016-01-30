/**
 * Created by lancy on 1/28/16.
 */

$(function() {
    setTimeout(function() {
        $(".main-content").css("height", $("html").height());
    }, 0);
    var main = new Vue({
        el: "#main",
        data: {
            name: {
                name: "Wei",
                surname: "Zhang"
            },
            professions: [
                "Ph.D., Associate Professor,\nSchool of Computer Science, Fudan University"
            ],
            email: "weizh@fudan.edu.cn",
            address: ["Room 314, Computer Building,",
                "Fudan University,",
                "No.825 Zhangheng Rd,",
                "Pudong District,",
                "Shanghai."
            ],
            timeline: [
                {
                    year: "Jan.2013– Present",
                    contents: [
                        "Associate Professor, School of Computer Science, Fudan University"
                    ]
                },
                {
                    year: "March2008– Dec.2012",
                    contents: [
                        "Assistant Professor, School of Computer Science, Fudan University"
                    ]
                },
                {
                    year: "Sept.2003– Jan.2008",
                    contents: [
                        "Fudan University，Ph.D. in Computer Science "
                    ]
                },
                /*{
                    year: "Sept.1996– June.2003",
                    contents: [
                        "Fudan University，Bachelor and Master in Economics"
                    ]
                }
                */
            ],
            affix: [
                {
                    title: "Research Topics",
                    contents: [
                        "Image and Video Analysis",
                        "Pattern Recognition",
                        "Artificial Intelligence"
                    ]
                },
                {
                    title: "Teaching Courses",
                    contents: [
                        "Mathematics Analysis",
                        "Linear Algebra",
                        "Probability Theory and Statistics"
                    ]
                },
                {
                    title: "Publications",
                    contents: [
                        "Wei Zhang, Sheng Zeng, Dequan Wang, Xiangyang Xue: Weakly Supervised\
                        Semantic Segmentation for Social Images. IEEE International Conference on\
                        Computer Vision and Pattern Recognition (CVPR), June 2015, Boston,\
                        Massachusetts, USA.",

                        "Dequan Wang, Zhiqiang Shen, Jie Shao, Wei Zhang, Xiangyang Xue, and Zheng\
                        Zhang, Multiple Granularity Descriptors for Fine-grained Categorization,\
                        International Conference on Computer Vision (ICCV), Dec. 2015, Santiago,\
                        Chile.",

                        "Ke Zhang, Wei Zhang, Sheng Zeng, Xiangyang Xue: Semantic Segmentation Using\
                        Multiple Graphs with Block-Diagonal Constraints. the 28th AAAI Conference on Artificial\
                        Intelligence (AAAI), July 2014, Quebec, Canada. (Oral Paper)",

                        "Wei Zhang, Ke Zhang, Pan Gu, Xiangyang Xue: Multi-View Embedding Learning for\
                        Incompletely Labeled Data. the 23rd International Joint Conference on Artificial Intelligence\
                        (IJCAI), Aug. 2013, Beijing. (Oral Paper)",

                        " Ke Zhang, Wei Zhang, Yingbin Zheng, Xiangyang Xue: Sparse Reconstruction for Weakly\
                        Supervised Semantic Segmentation. the 23rd International Joint Conference on Artificial\
                        Intelligence (IJCAI), Aug. 2013, Beijing. (Oral Paper)",

                        "Yao Lu, Wei Zhang, Cheng Jin, and Xiangyang Xue, Learning Attention Map from Images,\
                        IEEE International Conference on Computer Vision and Pattern Recognition (CVPR), June\
                        2012, Providence, Rhode Island, USA",

                        "Yao Lu, Wei Zhang, Ke Zhang, and Xiangyang Xue, Semantic Context Learning with\
                        Large-Scale Weakly-Labeled Image Set， the 21st ACM International Conference on\
                        Information and Knowledge Management (CIKM), 2012,Hawaii, USA",

                        "Wei Zhang, Xiangyang Xue, Jianping Fan, Xiaojing Huang, Bin Wu, and Mingjie Liu, \
                         Multi-Kernel Multi-Label Learning with Max-Margin Concept Network, the 22nd\
                        International Joint Conference on Artificial Intelligence (IJCAI), July 2011, Barcelona, Spain.\
                        (Oral Paper)",

                        "Xiangyang Xue, Wei Zhang, Jie Zhang, Bin Wu, Jianping Fan, and Yao Lu, Correlative\
                        Multi-Label Multi-Instance Image Annotation, the 13th International Conference on\
                        Computer Vision (ICCV), Nov. 2011, Barcelona, Spain.",

                        "Yao Lu, Wei Zhang, Hong Lu, and Xiangyang Xue, Salient Object Detection using\
                        Concavity Context, the 13th International Conference on Computer Vision (ICCV), Nov.\
                        2011, Barcelona, Spain",

                        "Wei Zhang, Xiangyang Xue, Zichen Sun, Hong Lu, Yue-Fei Guo, Metric learning by\
                        discriminant neighborhood embedding, Pattern Recognition, 41, 2086-2096, 2008.",

                        "Wei Zhang, Xiangyang Xue, Zichen Sun, Yue-Fei Guo, Mingmin Chi, and Hong Lu,\
                        Efficient Feature Extraction for Image Classification, the 11th International Conference on\
                        Computer Vision (ICCV), Oct. 2007, Rio de Janeiro, Brazil",

                        "Wei Zhang, Xiangyang Xue, Zichen Sun, Yue-Fei Guo, and Hong Lu, Optimal\
                        Dimensionality of Metric Space for Classification, the 24th International Conference on\
                        Machine Learning (ICML), June 2007, Corvallis, Oregon, USA.",

                        "Wei Zhang, Xiangyang Xue, Hong Lu, and Yue-Fei Guo, Discriminant Neighborhood\
                        Embedding for Classification, Pattern Recognition, 39 (2006) 2240-2243."

                    ]
                }
            ]
        }
    });
});
