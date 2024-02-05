"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4667],{39443:(s,n,a)=>{a.r(n),a.d(n,{default:()=>c});var e=a(64304);const t={href:"https://github.com/gramps-project/Gramps.js",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.grampsweb.org/user-guide/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.uE)('<p>我打算将家里的族谱电子化，并迁移到 Gramps 上。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># https://www.grampsweb.org/Deployment/</span>\n<span class="token comment"># https://github.com/gramps-project/web/blob/main/examples/docker-compose-base/docker-compose.yml</span>\n\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">grampsweb</span><span class="token punctuation">:</span> <span class="token important">&amp;grampsweb</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/gramps<span class="token punctuation">-</span>project/grampsweb<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grampsweb\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;23300:5000&quot;</span> <span class="token comment"># host:docker</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">GRAMPSWEB_TREE</span><span class="token punctuation">:</span> <span class="token string">&quot;Gramps Web&quot;</span> <span class="token comment"># will create a new tree if not exists</span>\n      <span class="token key atrule">GRAMPSWEB_CELERY_CONFIG__broker_url</span><span class="token punctuation">:</span> <span class="token string">&quot;redis://grampsweb_redis:6379/0&quot;</span>\n      <span class="token key atrule">GRAMPSWEB_CELERY_CONFIG__result_backend</span><span class="token punctuation">:</span> <span class="token string">&quot;redis://grampsweb_redis:6379/0&quot;</span>\n      <span class="token key atrule">GRAMPSWEB_RATELIMIT_STORAGE_URI</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>//grampsweb_redis<span class="token punctuation">:</span>6379/1\n    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> grampsweb_redis\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/users<span class="token punctuation">:</span>/app/users <span class="token comment"># persist user database</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/index<span class="token punctuation">:</span>/app/indexdir <span class="token comment"># persist search index</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/thumb_cache<span class="token punctuation">:</span>/app/thumbnail_cache <span class="token comment"># persist thumbnails</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/cache<span class="token punctuation">:</span>/app/cache <span class="token comment"># persist export and report caches</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/secret<span class="token punctuation">:</span>/app/secret <span class="token comment"># persist flask secret</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/db<span class="token punctuation">:</span>/root/.gramps/grampsdb <span class="token comment"># persist Gramps database</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/media<span class="token punctuation">:</span>/app/media <span class="token comment"># persist media files</span>\n      <span class="token punctuation">-</span> /volume1/docker/grampsjs/tmp<span class="token punctuation">:</span>/tmp\n\n  <span class="token key atrule">grampsweb_celery</span><span class="token punctuation">:</span>\n    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*grampsweb</span> <span class="token comment"># YAML merge key copying the entire grampsweb service config</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grampsweb_celery\n    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> grampsweb_redis\n    <span class="token key atrule">command</span><span class="token punctuation">:</span> celery <span class="token punctuation">-</span>A gramps_webapi.celery worker <span class="token punctuation">-</span><span class="token punctuation">-</span>loglevel=INFO\n\n  <span class="token key atrule">grampsweb_redis</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>alpine\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grampsweb_redis\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),o={},c=(0,a(86683).Z)(o,[["render",function(s,n){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("p",null,[(0,e._)("a",t,[(0,e.Uk)("Gramps.js"),(0,e.Wm)(a)]),(0,e.Uk)(" 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 "),(0,e._)("a",p,[(0,e.Uk)("Gramps Web User guide"),(0,e.Wm)(a)]),(0,e.Uk)("。")]),r])}]])},86683:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},69665:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-6cc6fbaa","path":"/services/dockers-on-nas/grampsjs.html","title":"Gramps.js：在线家谱","lang":"zh-CN","frontmatter":{"article":false,"title":"Gramps.js：在线家谱","order":35,"description":"Gramps.js 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 Gramps Web User guide。","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/grampsjs.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Gramps.js：在线家谱"}],["meta",{"property":"og:description","content":"Gramps.js 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 Gramps Web User guide。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T11:04:08.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-05T11:04:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Gramps.js：在线家谱\\",\\"description\\":\\"Gramps.js 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 Gramps Web User guide。\\"}"]]},"headers":[],"git":{"createdTime":1707131048000,"updatedTime":1707131048000,"contributors":[{"name":"cenzhifang","email":"105171265+cenzhifang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"services/dockers-on-nas/grampsjs.md","localizedDate":"2024年2月5日","excerpt":"<p><a href=\\"https://github.com/gramps-project/Gramps.js\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Gramps.js</a> 是一款用于协作族谱编辑与展示的 Web 开源应用。它基于领开源家谱桌面应用程序 Gramps，并可与 Gramps 交互操作。不过，Gramps.js 的输入过程相对复杂，需要分别添加成员、家庭、事件、地点等元素，然后将它们组合在一起。第一次配置可能会花费一些时间，使用教程参考 <a href=\\"https://www.grampsweb.org/user-guide/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Gramps Web User guide</a>。</p>","autoDesc":true}')}}]);