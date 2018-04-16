import detail from '../../template/detail'
import more from '../../template/moreList'
export default[
	{name:'detail',path:'/detail',component:detail,},
	{path:'/more/:type',component:more,name:'more'}
]
